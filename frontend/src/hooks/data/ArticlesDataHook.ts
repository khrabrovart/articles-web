import { Article } from "../../types/Articles";

const articles: Article[] = [
  {
    id: 1,
    title: "Tesla Model S",
    sections: [
      {
        title: "What's New for 2022?",
        content:
          "Without it we wouldn't have the growing selection of electric vehicles we have today, yet the 2022 Tesla Model S remains one of the most compelling and desirable options in that growing market segment. It also earns a spot on our 2022 Editors' Choice list. With up to 412 miles of estimated driving range—depending upon model—the S can easily be used for long drives, and the 1020-hp Plaid version can deliver supercar acceleration while seating four adults. The Model S is also practical, with a large rear cargo area and a secondary front-trunk for extra space. New entrants in the luxury EV sedan category includes the Porsche Taycan and the Audi e-tron GT, both of which challenge the Model S in terms of performance and comfort, but its superior range and available semi-autonomous driving technology continue to draw consumers to this Tesla. With an electric motor dedicated to each of the front and rear axles, the Model S offers full-time all-wheel drive no matter which version you choose. Acceleration of the various models ranges from outstanding to ferocious. We haven't tested the Model S Long Range or Plaid yet, but our 2020 Model S test vehicle delivered a blistering 2.4-second zero-to-60-mph time and proved endlessly entertainment thanks to its immediate power delivery. The Plaid model boasts a third electric motor, which boosts combined output to 1020 horsepower, which is enough to send it to 60 mph in just 2.1 seconds in our testing. The standard Model S has proven itself an agile sports sedan with well-controlled body motions and direct steering. Two different settings allow drivers to choose heavy or light steering effort, but neither of them enable more feedback from the road. Ride comfort is good, the handling is crisp, and it's confident and almost tranquil on the highway.",
      },
      {
        title: "Interior, Comfort, and Cargo",
        content:
          "With Model S prices starting at over $90,000, buyers would be reasonable to expect a certain amount of luxury inside the car. The cabin's atmosphere is nice enough, but it's not nearly as plush as those of our favorites such as the Mercedes-Benz E-class and the Volvo S90. The Model S's sloped roofline cleverly hides a rear liftgate that opens up to reveal a huge 26-cubic-foot trunk. We managed to stash eight of our carry-on-size cases without folding down the rear seats. Paltry small-item cubby stowage throughout the interior—especially in the back seat—is offset by a large underfloor bin in the rear cargo area.",
      },
    ],
    imageUrl:
      "https://tesla-cdn.thron.com/delivery/public/image/tesla/2391415a-7273-4735-92b2-a37c84c26f04/bvlatuR/std/4096x2560/Homepage-Model-S-Desktop-RHD",
    author: {
      userId: 1,
      userImageId: 1,
      userName: "adam_savage",
      fullName: "Adam Savage",
    },
  },
  {
    id: 2,
    title: "Fennec Fox",
    sections: [],
    imageUrl:
      "https://media.wired.com/photos/593261cab8eb31692072f129/master/pass/85120553.jpg",
    author: {
      userId: 1,
      userImageId: 1,
      userName: "adam_savage",
      fullName: "Adam Savage",
    },
  },
  {
    id: 3,
    title: "Best CPUs for Gaming 2022",
    sections: [],
    imageUrl:
      "https://images.frandroid.com/wp-content/uploads/2020/12/processeur-cpu.jpg",
    author: {
      userId: 1,
      userImageId: 1,
      userName: "adam_savage",
      fullName: "Adam Savage",
    },
  },
  {
    id: 4,
    title: "The rise of volleyball",
    sections: [],
    imageUrl:
      "https://www.fivb.org/Vis2009/Images/GetImage.asmx?Type=Press&No=90687&width=1410&height=923&stretch=uniformtofill",
    author: {
      userId: 1,
      userImageId: 1,
      userName: "adam_savage",
      fullName: "Adam Savage",
    },
  },
  {
    id: 5,
    title: "Best 10 Trails and Hikes in Armenia",
    sections: [],
    imageUrl:
      "https://daily.jstor.org/wp-content/uploads/2016/10/Moving_Forest_1050_700.jpg",
    author: {
      userId: 1,
      userImageId: 1,
      userName: "adam_savage",
      fullName: "Adam Savage",
    },
  },
  {
    id: 6,
    title: "How city life affects your health and happiness",
    sections: [],
    imageUrl:
      "https://images.unsplash.com/photo-1480714378408-67cf0d13bc1b?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxzZWFyY2h8M3x8Y2l0eXxlbnwwfHwwfHw%3D&w=1000&q=80",
    author: {
      userId: 1,
      userImageId: 1,
      userName: "adam_savage",
      fullName: "Adam Savage",
    },
  },
];

const useArticles = (): [Article[], (id: number) => Article | undefined] => {
  return [articles, (id) => articles.find((a) => a.id === id)];
};

export default useArticles;
