import * as motion from "motion/react-client"
import TermsModal from "@/app/modal/terms/modal";

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
                    duration: 0.3,
                    ease: "easeIn"
                }}>
                <TermsModal></TermsModal>
            </motion.div>
        </div>
    );
}