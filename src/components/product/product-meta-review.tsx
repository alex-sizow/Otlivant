import {useState} from "react";
import {Collapse} from "@components/common/accordion";

interface Props {
    data: any;
}

const ProductMetaReview: React.FC<Props> = ({data}) => {
    const [expanded, setExpanded] = useState<number>(0);
    const { metadata } = data;
    return (
        <>
            {metadata.map((item: { key: string, value: string }) =>
                 (
                    <Collapse
                        i={metadata.indexOf(item)}
                        key={item.key}
                        title={item.key}
                        translatorNS="review"
                        content={
                            // data?.meta.length === item.id ? (
                            // 	<>
                            // 		{item.content} <ReviewForm />
                            // 	</>
                            // ) :
                            item.value
                        }
                        expanded={expanded}
                        setExpanded={setExpanded}
                        variant="transparent"
                    />
                )
            )}
        </>
    );
}
;

export default ProductMetaReview;
