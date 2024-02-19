import { useEffect, useState } from "react";
import { getMachineImage, getMachineTag } from "../api/machine";

export const useMachineImage = (param) => {
    const [image, setImage] = useState(null)
    useEffect(() => {
        if (param) {
            getMachineImage(param)
                .then(response => {
                    const objectUrl = URL.createObjectURL(response);
                    setImage(objectUrl);
                })
                .catch(response => setImage(null))
        }

        // eslint-disable-next-line
    }, [param])

    return { image }
}

export const useMachineTag = (param) => {
    const [image, setImage] = useState(null)
    useEffect(() => {
        if (param) {
            getMachineTag(param)
                .then(response => {
                    const objectUrl = URL.createObjectURL(response);
                    setImage(objectUrl);
                })
                .catch(response => setImage(null))
        }

        // eslint-disable-next-line
    }, [param])

    return { image }
}
