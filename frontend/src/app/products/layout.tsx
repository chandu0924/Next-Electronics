import Sidebar from "../components/Sidebar/Sidebar";
import RightSidebar from "../components/RightSidebar/RightSidebar";

const ProductsLayout = ({children}: {children: React.ReactNode;}) => {
    return (
        <div style={{display: "flex"}}>
            <aside style={{width: "250px"}}>
                <Sidebar />
            </aside>
            <main style={{flex: 1, padding: "1rem"}}>
                {children}
            </main>
            <aside style={{width: "350px"}}>
                <RightSidebar />
            </aside>
        </div>
    )
}

export default ProductsLayout;