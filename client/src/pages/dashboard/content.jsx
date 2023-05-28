import { useState, useEffect } from 'react';
import { useRouter } from 'next/router';
import {
  Box,
  FormControl,
  FormLabel,
  Input,
  Button,
  Flex,
  Table,
  Thead,
  Tr,
  Th,
  Tbody,
  Td,
  VStack,
  useToast,
} from '@chakra-ui/react';
import api from '../api/contents/api';
import Layout from '@/components/dashboard/Layout';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight, MdAdd } from 'react-icons/md';
import { BsSearch } from 'react-icons/bs';

export default function Content() {
  const router = useRouter();
  const [title, setTitle] = useState('');
  const [subtitle, setSubtitle] = useState('');
  const [textarea, setTextarea] = useState('');
  const [id, setId] = useState(null);
  const [contents, setContents] = useState([]);
  const [isFormOpen, setIsFormOpen] = useState(false);
  const [isLoading, setIsLoading] = useState(false);
  const [count, setCount] = useState();
  const [page, setPage] = useState(1);
  const [currentPage, setCurrentPage] = useState(1);
  const [pageSize, setPageSize] = useState(10);
  const [sortKey, setSortkey] = useState('');
  const [searchText, setSearchText] = useState('');

  const isValidFormData = () => {
    if (!title) {
      return toast({
        title: 'Fill in the title field!!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    if (!subtitle) {
      return toast({
        title: 'Fill in the subtitle field!!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
    if (!textarea) {
      return toast({
        title: 'Fill in the textarea field!',
        status: 'error',
        duration: 9000,
        isClosable: true,
      });
    }
  };

  const handleSubmitCreateContent = async (e) => {
    e.preventDefault();

    if (isValidFormData()) return;
    try {
      setIsLoading(true);
      const { data } = await api.post('/content', {
        title,
        subtitle,
        textarea,
      });
      setContents(contents.concat(data.data));
      setTitle('');
      setSubtitle('');
      setTextarea('');
      setIsFormOpen(!isFormOpen);
      toast({
        title: 'Registered successfully!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const handlePageChange = (page) => {
    setPage(page);
    setCurrentPage(page);
  };

  const handlePageSizeChange = (page) => {
    setPageSize(page);
  };

  const handleSortKeyChange = (sortKey) => {
    setSortkey(sortKey);
  };
  const handleSearchTextChange = (searchText) => {
    setSearchText(searchText);
  };

  const handleRedirect = () => {
    router.push('/dashboard/content/createcontent');
  };

  const handleDeleteContent = async (_id) => {
    try {
      await api.delete(`/content/${_id}`);
      toast({
        title: 'Deleted successfully!!',
        status: 'info',
        duration: 9000,
        isClosable: true,
      });
    } catch (error) {
      console.log(error);
    }
  };

  const handleShowUpdateContent = (content) => {
    setId(content._id);
    setTitle(content.title);
    setSubtitle(content.subtitle);
    setTextarea(content.textarea);
    setIsFormOpen(true);
  };

  const handleUpdateContent = async (e) => {
    e.preventDefault();

    if (isValidFormData()) return;

    try {
      setIsLoading(true);
      await api.put(`contents/${id}`, { title, subtitle, textarea });
      setTitle('');
      setSubtitle('');
      setTextarea('');
      setId(null);
      setIsFormOpen(!isFormOpen);

      toast({
        title: 'Updated successfully!',
        status: 'success',
        duration: 9000,
        isClosable: true,
      });
      setIsLoading(false);
    } catch (error) {
      console.log(error);
      setIsLoading(false);
    }
  };

  const toast = useToast();

  useEffect(() => {
    const fetchContents = async () => {
      try {
        const response = await api.get('/content', {
          params: { page, pageSize, sortKey, searchText },
        });
        const { contents, count } = response.data.result;
        setContents(contents);
        setCount(count);
      } catch (error) {
        console.error(error);
      }
    };

    fetchContents();
  }, [page, pageSize, sortKey, searchText]);

  const rangeStart = (currentPage - 1) * pageSize + 1;
  const rangeEnd = Math.min(currentPage * pageSize, count);

  return (
    <Layout>
      <div className="flex justify-end items-end flex-wrap md:flex-nowrap w-full">
        <div className="flex items-center rounded-xl border border-gray-200 mb-3 px-2 bg-white mr-2">
          <Button onClick={handleRedirect}>
            <MdAdd className="my-2" />
          </Button>
        </div>
        <div className="w-11/12 md:w-1/3 flex items-center rounded-xl border border-gray-200 mb-3 px-2 bg-white">
          <BsSearch color="gray.300" />
          <input
            onChange={(e) => handleSearchTextChange(e.target.value)}
            type="text"
            className="border-none w-full h-8 text-xs "
            placeholder="Type to Search"
          />
        </div>
        <div className="w-20 flex items-center rounded-xl border border-gray-200 mb-3 px-2  bg-white ml-2">
          <select
            onChange={(e) => handlePageSizeChange(e.target.value)}
            className="w-full text-slate-900 h-8 text-xs border-none focus:ring-0"
          >
            <option value="10">10</option>
            <option value="25">25</option>
            <option value="50">50</option>
          </select>
        </div>
        <div className=" w-20 flex items-center rounded-xl border border-gray-200 mb-3 px-2  bg-white ml-2">
          <select
            onChange={(e) => handleSortKeyChange(e.target.value)}
            className="w-full text-slate-900 h-8 text-xs border-none focus:ring-0"
          >
            <option value="1">ASC</option>
            <option value="-1">DESC</option>
          </select>
        </div>
      </div>
      <Box className="relative py-16 bg-blueGray-50">
        <Flex align="center" justifyContent="center">
          <Box width={1100} borderWidth={1} borderRadius={8} boxShadow="lg" p={20} mt="25">
            <Table className="min-w-max w-full table-auto">
              <Thead bgColor="black">
                <Tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
                  <Th className="py-3 px-6 text-left">Title</Th>
                  <Th className="py-3 px-6 text-left">Subtitle</Th>
                  <Th className="py-3 px-6 text-left">Text</Th>
                  <Th className="py-3 px-6 text-left">Action</Th>
                </Tr>
              </Thead>
              <Tbody>
                {contents.map((content, index) => (
                  <Tr key={index}>
                    <Td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                      {content.title}
                    </Td>
                    <Td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                      {content.subtitle}
                    </Td>
                    <Td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                      {content.textarea}
                    </Td>
                    <Td className="border-t-0 px-6 align-middle border-l-0 border-r-0 text-sm whitespace-nowrap p-4">
                      <Flex>
                        <Button
                          className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-sm"
                          onClick={() => handleShowUpdateContent(content)}
                        >
                          Edit
                        </Button>
                        <Button
                          className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-sm"
                          onClick={() => handleDeleteContent(content._id)}
                        >
                          Remove
                        </Button>
                      </Flex>
                    </Td>
                  </Tr>
                ))}
              </Tbody>
            </Table>
            <div className="flex justify-center items-center mt-4 pl-4 pr-4">
              <div className="flex justify-between w-full">
                <p>
                  Showing {rangeStart} to {rangeEnd} of {count} results
                </p>
                <ul className="flex">
                  <li className="flex border rounded-s-md">
                    <button
                      className="w-8 flex justify-center items-center p-1"
                      disabled={currentPage === 1}
                      onClick={() => handlePageChange(currentPage - 1)}
                    >
                      <MdKeyboardArrowLeft />
                    </button>
                  </li>
                  {Array.from({ length: Math.ceil(count / pageSize) }, (_, i) => i + 1).map(
                    (page) => (
                      <li key={page}>
                        <button
                          className={`border w-8 p-1 ${
                            page === currentPage ? 'bg-gray-500 text-white' : ''
                          }`}
                          onClick={() => handlePageChange(page)}
                        >
                          {page}
                        </button>
                      </li>
                    ),
                  )}
                  <li className="flex border rounded-e-md">
                    <button
                      className="w-8 flex justify-center items-center rounded-sm p-1"
                      disabled={currentPage === Math.ceil(count / pageSize)}
                      onClick={() => handlePageChange(currentPage + 1)}
                    >
                      <MdKeyboardArrowRight />
                    </button>
                  </li>
                </ul>
              </div>
            </div>
          </Box>
        </Flex>
      </Box>
    </Layout>
  );
}
