function Navbar(){
    return(
        <>
            <nav className="navbar navbar-expand-sm bg-dark justify-content-around sticky-top">
                <div className="logo">
                    <span className="fw-bold fs-1" style={{color:"wheat"}}>Task</span>
                    <span className="text-danger fw-bold fs-1" >Flow</span>
                </div>
            </nav>
        </>
    );
}

export default Navbar;
