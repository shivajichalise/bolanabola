import { IconUserPlus } from "@tabler/icons-react"
import IconButton from "./IconButton"

const AddFriend = () => {
    return (
        <div className="fixed bottom-0 left-0 p-5">
            <IconButton type="primary" onClick={() => console.log("user add")}>
                <IconUserPlus size={17} />
            </IconButton>
        </div>
    )
}

export default AddFriend
