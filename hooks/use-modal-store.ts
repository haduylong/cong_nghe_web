import { Server } from "@prisma/client";
import { create } from "zustand"

export type ModalType = "createServer" | "invite";

interface ModalData {
    server?: Server;
}
interface ModalStore {
    type: ModalType | null;
    data: ModalData; // chua du lieu
    isOpen: boolean;
    onOpen: (type: ModalType, data?: ModalData) => void;
    onClose: () => void;
}

export const useModal = create<ModalStore>((set) => ({ // set la 1 function
    type: null,
    data: {},
    isOpen: false,
    onOpen: (type, data = {}) => set({ isOpen: true, type, data }),
    onClose: () => set({ type: null, isOpen: false })
}));