import {ResizableHandle, ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import Sidebar from "@/components/sidebar.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle.tsx";
import {UserNav} from "@/components/user-nav.tsx";
import {Outlet} from "react-router-dom";
import Nav from "@/components/nav.tsx";

export default function DefaultLayout() {
    return (
        <main className="w-full">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel defaultSize={20}>
                    <Sidebar/>
                </ResizablePanel>
                <ResizableHandle withHandle/>
                <ResizablePanel defaultSize={80}>
                    <div className="flex-col flex">
                        <div className="border-b ">
                            <div className="flex h-16 items-center px-5">
                                <Nav />
                                <div className="ml-auto flex items-center space-x-4">
                                    <ModeToggle/>
                                    <UserNav/>
                                </div>
                            </div>
                        </div>
                        <div className="flex-1 space-y-4 p-8 pt-6 bg-muted/40 dark:bg-background min-h-screen">
                            <Outlet/>
                        </div>
                    </div>
                </ResizablePanel>
            </ResizablePanelGroup>
        </main>
    )
}