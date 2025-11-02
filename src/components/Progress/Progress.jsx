



export default function Progress() {
  const partners = [
    {
      name: "Coinkite",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/coinkite_ba900a4543_418a51826f.svg",
      link: "https://nunchuk.io/blog/nunchuk-coinkite",
    },
    {
      name: "Blockstream",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/blockstream_49b14c1cbe_745171da74.svg",
      link: "https://nunchuk.io/blog/nunchuk-blockstream",
    },
    {
      name: "Twentytwo",
      img: "https://www-nunchuk-picked-bullfrog.s3.ap-southeast-1.amazonaws.com/Frame_10710_2c0a33ca17.png",
      link: "https://nunchuk.io/blog/nunchuk-twentytwo",
    },
  ];

  return (
    <section className="lg:pb-[150px] bg-white">
      <div className="max-w-full mx-auto px-4 md:px-8 xl:px-[50px] w-[1920px] lg:flex justify-between items-center lg:px-12 xl:px-24 2xl:px-[174px]">
        <p className="text-left text-[29px] lg:text-[32px] uppercase font-extrabold mb-[40px] lg:mb-0">
          Strategic Partners
        </p>

        <div className="flex flex-col lg:flex-row gap-[40px] lg:gap-[100px] items-center lg:items-start text-center pb-[90px] lg:pb-0">
          {partners.map((partner, index) => (
            <a
              key={index}
              href={partner.link}
              target="_blank"
              rel="noopener noreferrer"
              className="hover:opacity-80 transition"
            >
              <img
                src={partner.img}
                alt={partner.name}
                className="w-[200px] h-auto cursor-pointer object-contain"
              />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
