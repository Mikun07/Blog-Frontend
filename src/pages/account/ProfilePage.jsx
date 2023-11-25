import React, { useEffect, useState } from "react";
import Avatar from "../../components/avatar/Avatar";
import InfoInput from "../../components/input/InfoInput";
import EditModal from "../../components/modal/EditModal";
import axios from "axios";
import { authToken } from "../../store/auth";
import { BASE_URL } from "../../config/api";

function ProfilePage() {
  const [user, setUser] = useState({ name: "NA", username: "NA", email: "NA" });

  const [modal, setModal] = useState(false);

  const toggleModal = () => {
    setModal(!modal);
  };

  async function fetchUser() {
    try {
      let result = await axios.get(`${BASE_URL}/api/getUser`, {
        headers: {
          Authorization: authToken,
          "Content-Type": "application/json",
          Accept: "application/json",
        },
      });

      if (result.data?.success) {
        const user = result.data?.data;
        setUser({
          name: user?.name,
          email: user?.email,
          username: user?.username,
        });
      }
    } catch (error) {
      alert(error.message);
    }
  }
  useEffect(() => {
    fetchUser();
  }, []);

  return (
    <>
      <div className="flex flex-col justify-between lg:px-8 p-4 ">
        <div className="flex w-full items-center justify-between">
          <div className=""><Avatar name={user?.name} email={user?.email}/></div>

          {/* <div>
            <EditModal />
          </div> */}
        </div>

        <div className="flex justify-center">
          <div className="mt-12 grid lg:grid-cols-2 grid-cols-1 lg:gap-14 gap-2">
            <InfoInput UserName="username" Info={user.username} />

            <InfoInput UserName="email" Info={user.email} />
            <InfoInput UserName="name" Info={user.name} />
          </div>
        </div>
      </div>
    </>
  );
}

export default ProfilePage;
