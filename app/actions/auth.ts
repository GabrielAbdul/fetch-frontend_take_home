const login = async (prevState: any, formData: FormData) => {
  const url = "https://frontend-take-home-service.fetch.com/auth/login";
  const name = formData.get("name") as string;
  const email = formData.get("email") as string;

  try {
    const response = await fetch(url, {
      method: "POST",
      credentials: "include",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ name: name, email: email }),
    });

    if (!response.ok) {
      throw new Error(`Response status: ${response.status}`);
    }

  } catch (error: any) {
    console.log(error.message);
  }
};

export default login;
