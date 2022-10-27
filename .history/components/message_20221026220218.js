


export default function Message({children, avatar, username, description}){
    return(
    <div className="bg-white p-8 border-b-2 rounded-lg">
        <div className="flex items-center">
            <img src="" />
            <h2>user</h2>
        </div>
        <div>
            <p>description</p>
        </div>
        {children}
    </div>
    )

}