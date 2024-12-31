import * as motion from "motion/react-client"
import PrivacyModal from "@/app/modal/privacy/modal";

const FadeIn = {
    visible: {opacity: 1},
    hidden: {opacity: 0},
}

export default function Page() {

    return (
        <div>
            <motion.div
                variants={FadeIn}
                initial="hidden"
                animate="visible"
                exit="hidden"
                transition={{
                    delay: 0.2,
                    duration: 0.3,
                    ease: "easeIn"
                }}>
                <PrivacyModal></PrivacyModal>
            </motion.div>
        </div>
    );
}