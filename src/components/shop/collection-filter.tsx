import {useRouter} from "next/router";
import React from "react";
import {useTranslation} from "next-i18next";
import {RadioBox} from "@components/ui/radiobox";
import { useAllCollectionsQuery } from '../../../generated/graphql';

export const CollectionFilter = () => {
  const router = useRouter();
  const { pathname, query } = router;
  const { t } = useTranslation("common");
  const { data, loading } = useAllCollectionsQuery();
  const selectedCollection = query?.collection ? (query.collection as string) : '';
  const [formState, setFormState] = React.useState<string>(selectedCollection);

  React.useEffect(() => {
    setFormState(selectedCollection);
  }, [query?.collection]);

  if (loading) return <p>Loading...</p>;

  const collections = data?.collections?.edges || []

  const collectionFilterItems = collections.map(({node}) => node);

  function handleItemClick(e: React.FormEvent<HTMLInputElement>): void {
    const { value } = e.currentTarget;
    const { collection, ...restQuery } = query;
    router.push(
      {
        pathname,
        query: {
          ...restQuery,
          collection: value,
        },
      },
      undefined,
      { scroll: false }
    );
  }
  return (
    <div className="block border-b border-gray-300 pb-7 mb-7">
      <h3 className="text-heading text-sm md:text-base font-semibold mb-7">
        {t("text-collection-list")}
      </h3>
      <div className="mt-2 flex flex-col space-y-4 text-secondary">
        {collectionFilterItems?.map((item: any) => (
          <RadioBox
            key={item.id}
            labelKey={item.name}
            name={item.name.toLowerCase()}
            checked={item.slug === formState}
            value={item.slug}
            onChange={handleItemClick}
          />
        ))}
      </div>
    </div>
  );
};
