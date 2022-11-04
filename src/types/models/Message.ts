// Auto-generated , DO NOT EDIT
import {Entity, FunctionPropertyNames} from "@subql/types";
import assert from 'assert';




type MessageProps = Omit<Message, NonNullable<FunctionPropertyNames<Message>>>;

export class Message implements Entity {

    constructor(id: string) {
        this.id = id;
    }


    public id: string;

    public blockHeight: bigint;

    public txHash: string;

    public sender: string;

    public contract: string;


    async save(): Promise<void>{
        let id = this.id;
        assert(id !== null, "Cannot save Message entity without an ID");
        await store.set('Message', id.toString(), this);
    }
    static async remove(id:string): Promise<void>{
        assert(id !== null, "Cannot remove Message entity without an ID");
        await store.remove('Message', id.toString());
    }

    static async get(id:string): Promise<Message | undefined>{
        assert((id !== null && id !== undefined), "Cannot get Message entity without an ID");
        const record = await store.get('Message', id.toString());
        if (record){
            return Message.create(record as MessageProps);
        }else{
            return;
        }
    }



    static create(record: MessageProps): Message {
        assert(typeof record.id === 'string', "id must be provided");
        let entity = new Message(record.id);
        Object.assign(entity,record);
        return entity;
    }
}
