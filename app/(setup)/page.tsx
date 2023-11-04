import { initialProfile } from "@/lib/initial-profile";
import { db } from "@/lib/db";
import { redirect } from "next/navigation";

// từ profile của curr user đưa người đó đến server đầu tiên được tạo
const SetupPage = async () => {
    const profile = await initialProfile();

    const server = await db.server.findFirst({
        where: {
            members: {
                some: {
                    profileId: profile.id
                }
            }
        }
    })

    if (server) {
        return redirect(`/server/${server.id}`);
    }

    return (
        <div>
            set up page
        </div>
    );
}

export default SetupPage;