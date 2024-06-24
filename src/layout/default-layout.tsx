import {ResizablePanel, ResizablePanelGroup} from "@/components/ui/resizable.tsx";
import Sidebar from "@/components/sidebar.tsx";
import {ModeToggle} from "@/components/Theme/mode-toggle.tsx";
import {UserNav} from "@/components/user-nav.tsx";
import {Outlet} from "react-router-dom";
import Nav from "@/components/nav.tsx";
import {useDispatch, useSelector} from "react-redux";
import { RootState } from "@/redux/store";
import { Button } from "@/components/ui/button";
import { ChevronsLeft, ChevronsRight } from "lucide-react";
import { expandSidebar, resizableSizeOnDefault, shrinkSidebar } from "@/redux/state/resizable";

export default function DefaultLayout() {

    const { sidebarPanelSize, contentPanelSize } = useSelector((state: RootState) => state.resizableState);
    const resizableOnDefaultSize = useSelector(resizableSizeOnDefault);
    const dispatch = useDispatch();

    return (
        <main className="w-full">
            <ResizablePanelGroup direction="horizontal">
                <ResizablePanel collapsible minSize={5} maxSize={20} defaultSize={sidebarPanelSize} >
                    <Sidebar/>
                </ResizablePanel>
                <div className="w-0 border-r relative grid place-items-center">
                    {resizableOnDefaultSize ? 
                        <Button variant="outline" size="icon" className="absolute -left-4 size-8" onClick={() => {dispatch(expandSidebar())}}>
                            <ChevronsRight className="size-5"/>
                        </Button> : 
                        <Button variant="outline" size="icon" className="absolute -left-4 size-8" onClick={() => {dispatch(shrinkSidebar())}}>
                            <ChevronsLeft className="size-5" />
                        </Button>}
                </div>
                <ResizablePanel collapsible defaultSize={contentPanelSize} minSize={80} maxSize={95}>
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