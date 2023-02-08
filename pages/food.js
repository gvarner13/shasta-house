import useSWR from "swr";
import Image from "next/image";
import { motion } from "framer-motion";

const fetcher = (...args) => fetch(...args).then((res) => res.json());

const container = {
  hidden: { opacity: 1, scale: 0 },
  visible: {
    opacity: 1,
    scale: 1,
    transition: {
      delayChildren: 0.3,
      staggerChildren: 0.2,
    },
  },
};

const item = {
  hidden: { y: 20, opacity: 0 },
  visible: {
    y: 0,
    opacity: 1,
  },
};

export default function Food() {
  const { data, error } = useSWR("/api/businesses/search", fetcher);

  if (error) return <div>Failed to load</div>;
  if (!data) return <div>Loading...</div>;

  return (
    <motion.div
      className="flex flex-wrap justify-around bg-slate-300"
      variants={container}
      initial="hidden"
      animate="visible"
    >
      {data.businesses.map((business) => (
        <motion.div
          className="rounded-xl shadow-xl m-4 p-6 bg-white"
          key={business.id}
          variants={item}
        >
          <div>
            <h1 className="text-xl">{business.name}</h1>
            <div>{business.location.address1}</div>
            <div>{business.display_phone}</div>
          </div>
          <div>
            <Image
              className="rounded object-cover h-48 w-96"
              src={business.image_url}
              alt="Next.js Logo"
              width={200}
              height={200}
            />
          </div>
        </motion.div>
      ))}
    </motion.div>
  );
}
