

export const rank = async (username="") => {
  try {
    const response = await fetch('/api/v1/' + username);
    const user = await response.json();
    return user;
  } catch (e) {
    console.log(e);
  }
};
