
export const rank = async (username="") => {
  try {
    const response = await fetch('http://localhost:3000/api/v1/' + username);
    const user = await response.json();
    return user;
  } catch (e) {
    console.log(e);
  }
};
