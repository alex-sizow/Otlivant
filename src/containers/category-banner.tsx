import Image from 'next/image';

interface CategoryBannerProps {
  className?: string;
  category: any;
}

const CategoryBanner: React.FC<CategoryBannerProps> = ({ className = 'mb-7', category }) => {
  // const {locale} = useRouter();
  // const dir = getDirection(locale);
  const categoryTitle = category?.name.toString().split(' ').join('');
  const img = category?.backgroundImage?.url;

  return (
    <div
      className={`bg-base-200 h-570-px rounded-md overflow-hidden relative flex flex-row mt-6 ${className}`}
    >
      <div className="hidden md:flex h-[570px]">
        {
          img && <Image src={img as string} alt="Category Banner" layout="fill" objectFit="cover"/>
        }
      </div>
      <div
        className="relative md:absolute top-0 start-0 h-auto md:h-full w-full md:w-2/5 flex items-center py-2 sm:py-3.5">
        <h2
          className="capitalize text-2xl md:text-3xl lg:text-4xl xl:text-5xl font-bold text-secondary font-days p-7 text-center w-full">
          #{categoryTitle}
        </h2>
      </div>
    </div>
  );
};

export default CategoryBanner;
