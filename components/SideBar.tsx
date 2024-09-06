import NewChat from "./NewChat"

function SideBar() {
  return (
    <div className="p-2 flex flex-col h-screen">
        <div className="flex-1 ">
           <NewChat />
            <div>
                {/* modules */}
            </div>
            {/* chatRows */}
        </div>
    </div>
  )
}

export default SideBar