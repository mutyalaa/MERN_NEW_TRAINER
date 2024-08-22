function Props(props) {
    return (
        <>
            {console.log(props)}
            <h1>Welcome Back {props.fName}</h1>
            {/* fName is the attritube given for argument while calling it in App */}
            <h3>Role: {props.role}</h3>
            <h5>Last Login: {props.login}</h5>
        </>
    )
}

export default Props