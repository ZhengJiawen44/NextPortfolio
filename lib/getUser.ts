import { useEffect, useState } from "react";

interface user {
  id: string;
  name: string;
  email: string;
}

const useUser = () => {
  const [user, setUser] = useState<user | null>(null);
  const [loading, setLoading] = useState<boolean>(false);
  const [error, setError] = useState<string | null>(null);

  const fetchUser = async () => {
    setLoading(true);

    try {
      const response = await fetch("/api/user", {
        method: "GET",
      });
      if (!response.ok) {
        throw new Error("failed to fetch user");
      }
      const user = await response.json();

      setUser(user);
    } catch (error) {
      setError(
        error instanceof Error
          ? error.message
          : "an unexpected error occured while fetching user"
      );
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchUser();
  }, []);

  return { user, loading, error };
};

export default useUser;
