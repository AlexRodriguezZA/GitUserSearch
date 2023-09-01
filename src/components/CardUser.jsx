import CardData from "./CardData";
import cat from "../assets/oktocat.png";

//Icons
import building_grey from "../assets/Icons/building_grey.svg";
import building_white from "../assets/Icons/building_white.svg";
import link_grey from "../assets/Icons/link_grey.svg";
import link_white from "../assets/Icons/link_white.svg";
import location_grey from "../assets/Icons/location_grey.svg";
import location_white from "../assets/Icons/location_white.svg";
import twitter_grey from "../assets/Icons/twitter_grey.svg";
import twitter_white from "../assets/Icons/twitter_white.svg";

const CardUser = ({ user }) => {
  if (!user) {
    return (
      <div className="flex flex-col w-11/12 bg-blue-card rounded-2xl mt-4 items-center">
        <section className="flex m-5 gap-5 w-11/12">
          <div className="flex justify-center items-center w-24">
            <img src={cat} alt="" className="rounded-full" />
          </div>
          <div className="">
            <h2 className="text-white text-lg font-bold md:text-2xl">
              {" "}
              The Octocat
            </h2>
            <p className="text-blue-button  md:text-xl">@Octocat</p>
            <p className="text-white mt-2 text-sm ">Joined 25 jan 2011</p>
          </div>
        </section>
        <section className="m-5 w-11/12">
          <p className="w-full text-justify text-white text-sm md:text-md">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Accusamus
            inventore error delectus animi, ab illo earum doloremque v
          </p>
        </section>

        <section className="w-full flex justify-center">
          <CardData />
        </section>

        <section className="w-11/12 mt-5 mb-5 flex gap-3 flex-col items-start">
          <div className="flex gap-3 w-full items-center">
            <img src={location_white} className="w-4" alt="" />
            <p className="text-white text-sm md:text-lg">San francisco</p>
          </div>
          <div className="flex gap-3 w-full items-center">
            <img src={link_white} className="w-4" alt="" />
            <p className="text-white text-sm md:text-lg">
              http://alexrodriguez
            </p>
          </div>{" "}
          <div className="flex gap-3 w-full items-center">
            <img src={twitter_grey} alt="" className="w-4" />
            <p className="text-grey text-sm md:text-lg">Not avalable</p>
          </div>{" "}
          <div className="flex gap-3 w-full items-center">
            <img src={building_white} alt="" className="w-4" />
            <p className="text-white text-sm md:text-lg">@github</p>
          </div>
        </section>
      </div>
    );
  } else {
    return (
      <div className="flex flex-col w-11/12 bg-blue-card rounded-2xl mt-4 items-center">
        <section className="flex m-5 gap-5 w-11/12">
          <div className="flex justify-center items-center w-24">
            <img src={user.avatar_url} alt="" className="rounded-full" />
          </div>
          <div className="">
            <h2 className="text-white text-lg font-bold md:text-2xl">
              {user.name}
            </h2>
            <p className="text-blue-button  md:text-xl">@{user.login}</p>
            <p className="text-white mt-2 text-sm ">
              Joined {user.created_at.slice(0, 10)}
            </p>
          </div>
        </section>

        {
          user.bio !== null && user.bio !== "" ? ( <section className="m-5 w-11/12">
          <p className="w-full text-justify text-white text-sm md:text-md">
            {user.bio}
          </p>
        </section>):(<section className="m-5 w-11/12">
          <p className="w-full text-justify text-white text-sm md:text-md">
            not bio
          </p>
        </section>)
        }
       

        <section className="w-full flex justify-center">
          <CardData
            repos={user.public_repos}
            followers={user.followers}
            following={user.following}
          />
        </section>

        <section className="w-11/12 mt-5 mb-5 flex gap-3 flex-col items-start">
          {user.location !== null ? (
            <div className="flex gap-3 w-full items-center">
              <img src={location_white} className="w-4" alt="" />
              <p className="text-white text-sm md:text-lg">{user.location}</p>
            </div>
          ) : (
            <div className="flex gap-3 w-full items-center">
              <img src={location_grey} className="w-4" alt="" />
              <p className="text-grey text-sm md:text-lg">Not available</p>
            </div>
          )}

          {user.blog !== null && user.blog !== "" ? (
            <div className="flex gap-3 w-full items-center">
              <img src={link_white} className="w-4" alt="" />
              <p className="text-white text-sm md:text-lg">{user.blog}</p>
            </div>
          ) : (
            <div className="flex gap-3 w-full items-center">
              <img src={link_grey} className="w-4" alt="" />
              <p className="text-grey text-sm md:text-lg">Not available</p>
            </div>
          )}

          {user.twitter_username !== null ? (
            <div className="flex gap-3 w-full items-center">
              <img src={twitter_white} alt="" className="w-4" />
              <p className="text-white text-sm md:text-lg">
                {user.twitter_username}
              </p>
            </div>
          ) : (
            <div className="flex gap-3 w-full items-center">
              <img src={twitter_grey} alt="" className="w-4" />
              <p className="text-grey text-sm md:text-lg">Not available</p>
            </div>
          )}

          {user.company !== null ? (
            <div className="flex gap-3 w-full items-center">
              <img src={building_white} alt="" className="w-4" />
              <p className="text-white text-sm md:text-lg">{user.company}</p>
            </div>
          ) : (
            <div className="flex gap-3 w-full items-center">
              <img src={building_grey} alt="" className="w-4" />
              <p className="text-grey text-sm md:text-lg">Not available</p>
            </div>
          )}
        </section>
      </div>
    );
  }
};

export default CardUser;
