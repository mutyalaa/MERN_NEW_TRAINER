const fName = "peter"

function AppComp() {
    return(
        <>
            <h1>Hello React!! {fName}</h1>
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JS</li>
                <li>React</li>
            </ul>
            <CourseList></CourseList>
            <Footer></Footer>
        </>
    )
}

function CourseList() {
    return (
        <>
            <h2>Courses Completed</h2>
            <ul>
                <li>CSS</li>
                <li>HTML</li>
                <li>JS</li>
            </ul>
        </>
    )
}

function Footer() {
    return (
        <>
            <h5>Copy Rights</h5>
        </>
    )
}

export default AppComp
// export {CourseList, Footer}