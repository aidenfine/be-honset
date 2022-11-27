
export default function Message({children, avatar, username, description}){
    return(
    <div className="bg-x p-8 mb-2 rounded-lg bg-neutral-800">
        <div className="flex items-center gap-2">
            <img src={avatar} className="w-9 rounded-full text-slate-200" />
            <h2 className="text-slate-200">{username}</h2>
        </div>
        <div className="py-4 text-slate-200">
            <p>{description}</p>
        </div>
        {children}
    </div>
    )

}