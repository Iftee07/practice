import PriceOption from "../PriceOption/PriceOption";

const PriceOptions = () => {
  const priceOptions = [
    {
      id: 1,
      name: "Basic Membership",
      features: [
        "Access to gym facilities",
        "Standard workout equipment",
        "Limited gym hours",
        "Access to locker room",
      ],
      price: 30.0,
    },
    {
      id: 2,
      name: "Standard Membership",
      features: [
        "Full gym access",
        "All workout equipment",
        "Extended gym hours",
        "Access to locker room",
      ],
      price: 45.0,
    },
    {
      id: 3,
      name: "Premium Membership",
      features: [
        "24/7 gym access",
        "All workout equipment",
        "Access to sauna",
        "Free fitness assessment",
      ],
      price: 60.0,
    },
    {
      id: 4,
      name: "Student Membership",
      features: [
        "Discounted gym access",
        "Standard workout equipment",
        "Access during student hours",
        "Locker room access",
      ],
      price: 25.0,
    },
    {
      id: 5,
      name: "Family Membership",
      features: [
        "Access for 4 family members",
        "Full gym access",
        "Kids activity zone",
        "Locker room access",
      ],
      price: 100.0,
    },
    {
      id: 6,
      name: "Couple Membership",
      features: [
        "Access for 2 people",
        "Full gym access",
        "Group class discounts",
        "Locker room access",
      ],
      price: 75.0,
    },
    {
      id: 7,
      name: "Weekend Membership",
      features: [
        "Access on weekends only",
        "Standard workout equipment",
        "Locker room access",
        "Group class access",
      ],
      price: 20.0,
    },
    {
      id: 8,
      name: "Personal Training Plan",
      features: [
        "Gym access included",
        "2 personal training sessions weekly",
        "Custom workout plan",
        "Nutrition guidance",
      ],
      price: 120.0,
    },
    {
      id: 9,
      name: "Yoga Membership",
      features: [
        "Unlimited yoga classes",
        "Meditation sessions",
        "Locker room access",
        "Weekend workshops",
      ],
      price: 50.0,
    },
    {
      id: 10,
      name: "VIP Membership",
      features: [
        "24/7 premium access",
        "Private locker",
        "Sauna and spa access",
        "Unlimited personal training consultations",
      ],
      price: 150.0,
    },
  ];
  return (
    <div className="flex flex-col gap-y-10 px-10">
      <h1 className="font-bold text-5xl text-center">BEST PRICES</h1>
      <div className="grid lg:grid-cols-3 gap-28 w-fit mx-auto">
        {priceOptions.map((option) => (
          <PriceOption option={option}></PriceOption>
        ))}
      </div>
    </div>
  );
};

export default PriceOptions;
