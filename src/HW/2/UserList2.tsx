import {CurrentUser} from './CurrentUser';
import {UsersObjectType} from './HW2';

type AddressType = {
    street: string,
    city: string,
}

export type FriendsType = {
    id: number,
    name: string,
    age: number,
    address: AddressType
}

type UsersType = {
    myFriends: FriendsType[]
}

type UserList2PropsType = {
    users: UsersType
    filterUsers: () => void
};

export const UserList2 = (props: UserList2PropsType) => {
    return (
        <div id={'hw02-users'}>
            <h2>User List:</h2>

            <button id={'hw02-filter-button'} onClick={() => props.filterUsers()}>SHOW ME FRIENDS FROM LA</button>

            <ul>
                {props.users.myFriends.map((u) =>
                    (
                        <CurrentUser user={u}/>
                    )
                )}
            </ul>
        </div>
    );
};
