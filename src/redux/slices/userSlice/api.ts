export const fetchUsers = async () => {
  try {
    const response = await fetch('https://jsonplaceholder.typicode.com/users');
    console.log('resp', response);
    const data = await response.json();
    return { data, status: response.status };
  } catch (error) {
    return { error, status: 500 };
  }
};
