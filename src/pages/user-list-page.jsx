import UserTable from '../components/user-table';
import useFetchData from '../hooks/useFetchData';

const UserListPage = () => {
  const { data: users, isLoading } = useFetchData('users');
  return (
    <>
      <h1 className="text-4xl font-semibold ml-64 mt-12">User List</h1>
      {isLoading && (
        <div className="flex justify-center mt-24 h-screen">
          <p>Loading...</p>
        </div>
      )}

      {users.length > 0 ? (
        <div className=" mx-80 mt-24">
          <UserTable users={users} />
        </div>
      ) : (
        <div className="flex justify-center mt-24 h-screen">
          <p>No users found</p>
        </div>
      )}
    </>
  );
};

export default UserListPage;
