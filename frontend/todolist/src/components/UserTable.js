




const UserTable = ({ users }) => {
    return (
        <div>
            {
                users.map((e, key) => <div key={key}>
                    <span>{e.name} </span>
                    <span>{e.age}</span>
                </div>
                )
            }
        </div>
    );
}

export default UserTable