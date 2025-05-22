import Sidebar from "../components/Sidebar";

const ProductsLayout = ({children}: {children: React.ReactNode;}) => {
    return (
        <div style={{display: "flex"}}>
            <aside style={{width: "250px"}}>
                <Sidebar />
            </aside>
            <main style={{flex: 1, padding: "1rem"}}>
                {children}
            </main>
        </div>
    )
}

export default ProductsLayout;