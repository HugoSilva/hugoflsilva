import PageModal from "@/app/project/[id]/PageModal";
import {DataType} from "@/lib/DataTypes.d";
import {getLocalData} from "@/api/dataLayer";

export default async function Page() {

    const data:DataType = await getLocalData();
    
    return (
        <div>
            <PageModal projects={data.projects}></PageModal>
        </div>
    );
}