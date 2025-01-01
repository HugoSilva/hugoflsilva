import {DataType} from "@/lib/DataTypes.d";
import {getLocalData} from "@/utils/dataLayer";
import * as motion from "motion/react-client"
import ProjectModal from "@/app/project/[id]/modal";

const FadeIn = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
}

export default async function Page() {

    const data:DataType = await getLocalData();
    
    return (
        <div>
            <motion.div
                variants={FadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                    delay: 0.1,
                    duration: 0.3,
                    ease: "easeIn"
                }}>
                <ProjectModal projects={data.projects}></ProjectModal>
            </motion.div>
        </div>
);
}