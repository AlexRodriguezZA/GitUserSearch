
const CardData = ({repos, following, followers}) => {
  return (
    <div className="flex w-11/12 h-24 justify-center items-center bg-blue-dark gap-8 rounded-2xl md:justify-evenly">
        <section className="flex flex-col items-center gap-2">
            <p className="text-sm text-white md:text-lg">repos</p>
            <p className="text-md text-white font-bold md:text-xl">{repos}</p>
        </section>
        <section className="flex flex-col items-center gap-2">
            <p className="text-sm text-white  md:text-lg">Followers</p>
            <p className="text-md text-white font-bold md:text-xl">{followers}</p>
        </section> 
        <section className="flex flex-col items-center gap-2">
            <p className="text-sm text-white  md:text-lg">Following</p>
            <p className="text-md text-white font-bold md:text-xl">{following}</p>
        </section>

    </div>
  )
}

export default CardData