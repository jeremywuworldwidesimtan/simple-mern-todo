import { Button, Dialog, DialogPanel, DialogTitle } from '@headlessui/react'
import { useState } from 'react'

export default function ConfirmationModal(
    {
        dialogButton,
        dialogTitle,
        dialogDescription,
        onYes
    }
) {
    const [isOpen, setIsOpen] = useState(false)
    // console.log(isOpen)

    const open = () => setIsOpen(true)

    const close = () => setIsOpen(false)

    return (
        <>
            <Button
                onClick={open}
                className=" bg-red-600 px-4 py-2 text-sm font-medium text-white focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-red-600/30"
            >
                {dialogButton}
            </Button>
            <Dialog open={isOpen} as="div" className="relative z-10 focus:outline-none" onClose={close}>
                <div className="fixed inset-0 z-10 w-screen overflow-y-auto">
                    <div className="flex min-h-full items-center justify-center p-4">
                        <DialogPanel
                        transition
                        className="w-full max-w-md rounded-xl bg-black/50 p-6 backdrop-blur-2xl duration-300 ease-out data-closed:transform-[scale(95%)] data-closed:opacity-0"
                        >
                        <DialogTitle as="h3" className="text-base/7 font-medium text-white">
                            {dialogTitle}
                        </DialogTitle>
                        <p className="mt-2 text-sm/6 text-white/50">
                            {dialogDescription}
                        </p>
                        <div className="mt-4">
                            <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                            onClick={onYes}
                            >
                                Yes
                            </Button>
                            <Button
                            className="inline-flex items-center gap-2 rounded-md bg-gray-700 px-3 py-1.5 text-sm/6 font-semibold text-white shadow-inner shadow-white/10 focus:not-data-focus:outline-none data-focus:outline data-focus:outline-white data-hover:bg-gray-600 data-open:bg-gray-700"
                            onClick={close}
                            >
                                No
                            </Button>
                        </div>
                        </DialogPanel>
                    </div>
                </div>
            </Dialog>
        </>
    )
}
