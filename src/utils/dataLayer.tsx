import {promises as fs} from 'fs';
import path from 'path'
import {DataType} from "@/lib/DataTypes.d";

export async function getLocalData() {

    const filePath = path.join(process.cwd(), 'src/utils/data.json');

    const jsonData = await fs.readFile(filePath, 'utf8');

    const objectData: DataType = JSON.parse(jsonData);

    return objectData
}