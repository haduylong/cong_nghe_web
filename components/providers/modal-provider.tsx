"use client"

import { CreateServerModal } from "@/components/modals/create-server-modal"
import { InviteModal } from "@/components/modals/invite-modal";
import { useEffect, useState } from "react"

export const ModalProvider = () => {
    const [isMounted, setIsMounted] = useState(false);

    useEffect(() => {
        setIsMounted(true);
    }, [])

    if (!isMounted) {
        return null;
    }


    return (
        <>
            <CreateServerModal />
            <InviteModal />
        </>
    )
}

// InitialModal được render trực tiếp khi tạo tài khoản (ko can click, useEffect ...) nên ko
// đc quản lý ở đây