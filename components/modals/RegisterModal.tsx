import useLoginModal from "@/hooks/useLoginModal";
import useRegisterModal from "@/hooks/useRegisterModal";
import React, { useCallback, useState } from "react";
import InputPrimary from "../Input/InputPrimary";
import Modal from "../Modal";
import axios from "axios";
import { toast } from "react-hot-toast";
import { signIn } from "next-auth/react";

export default function RegisterModal() {
  const loginModal = useLoginModal();
  const registerModal = useRegisterModal();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [name, setName] = useState("");
  const [username, setUsername] = useState("");
  const [isLoading, setIsLoading] = useState(false);

  const onToggle = useCallback(() => {
    if (isLoading) {
      return;
    }

    registerModal.onClose();
    loginModal.onOpen();
  }, [isLoading, registerModal, loginModal]);

  const onSubmit = useCallback(async () => {
    try {
      setIsLoading(true);

      // TODO register modal

      await axios.post("/api/register", {
        email,
        password,
        username,
        name,
      });

      toast.success("Account created");

      signIn("credentials", {
        email,
        password,
      });

      registerModal.onClose();
    } catch (error) {
      console.log(error);

      toast.error("Something wrong");
    } finally {
      setIsLoading(false);
    }
  }, [registerModal, email, password, username, name]);

  const bodyContent = (
    <div className="flex flex-col gap-4">
      <InputPrimary
        placeholder="email"
        onChange={(e) => setEmail(e.target.value)}
        value={email}
        disable={isLoading}
      />
      <InputPrimary
        placeholder="name"
        onChange={(e) => setName(e.target.value)}
        value={name}
        disable={isLoading}
      />
      <InputPrimary
        placeholder="username"
        onChange={(e) => setUsername(e.target.value)}
        value={username}
        disable={isLoading}
      />
      <InputPrimary
        placeholder="password"
        onChange={(e) => setPassword(e.target.value)}
        value={password}
        disable={isLoading}
        type="password"
      />
    </div>
  );

  const footerContent = (
    <div className="text-neutral-400 text-center mt-4">
      <p>
        Already have an account?
        <span
          onClick={onToggle}
          className="text-white cursor-pointer hover:underline ml-1"
        >
          Sign in
        </span>
      </p>
    </div>
  );

  return (
    <Modal
      disable={isLoading}
      isOpen={registerModal.isOpen}
      title="Create a Account"
      actionLabel="Register"
      onClose={registerModal.onClose}
      onSubmit={onSubmit}
      body={bodyContent}
      footer={footerContent}
    />
  );
}
