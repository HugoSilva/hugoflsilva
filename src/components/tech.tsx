import {DataType} from "@/lib/DataTypes.d";
import {getLocalData} from "@/api/dataLayer";
import TechWidget from "@/components/techWidget";

const chunkArray = <T, >(array: T[], chunkSize: number): T[][] => {
    const chunks: T[][] = [];
    for (let i = 0; i < array.length; i += chunkSize) {
        chunks.push(array.slice(i, i + chunkSize));
    }
    return chunks;
};

export default async function Tech() {

    const data: DataType = await getLocalData();
    const profileChunks = chunkArray(data.tech, 4);

    return (
        <section id="profiles" className="profiles">
            <div className="profiles-details">
                <div className="section-heading text-center">
                    <h2>Tech</h2>
                </div>
                <div className="container">
                    <div className="profiles-content">
                        {
                            profileChunks.map((chunk, rowIndex) => (
                                <div>
                                    <div className="row" key={`row_${rowIndex}`}>
                                        {
                                            chunk.map((profile, index) => (
                                                <TechWidget key={"tech_" + index} tech={profile}></TechWidget>
                                            ))
                                        }
                                    </div>
                                    {
                                        rowIndex === (profileChunks.length - 1) ? <div></div>
                                            : <div className="profile-border"></div>
                                    }
                                </div>
                            ))
                        }
                    </div>
                </div>
            </div>
        </section>
    );
}