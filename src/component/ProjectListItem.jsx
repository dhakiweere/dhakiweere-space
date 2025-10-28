export default function ProjectListItem({title, desc, repoURL=null, onlineURL=null, demoURL=null}) {
    return (
        <div className='animate-selection mb-4 flex flex-row gap-x-2 items-center justify-baseline'>
            <p className="font-bold w-[15ch]" >{title}</p>
            <div className='hidden md:block w-40'></div>
            <p className='hidden xl:block w-[50ch] italic text-left'>{desc}</p>
            <div className='flex-1'></div>
            {demoURL && <a href={onlineURL} className='animate-button-demo'>Demo</a>}
            {onlineURL && <a href={onlineURL} className='animate-button-online'>Online</a>}
            {repoURL && <a href={onlineURL} className='animate-button-repo'>Repo</a>}
        </div>
    );
}