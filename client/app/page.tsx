import axios from "axios";

export default function Home() {
    const conso = async () => {
        const response = await axios.get("http://localhost:4000/test");
        console.log("hi");
        return response;
    };

    return (
        <div>
            <div>서버와의 소통</div>
            <button onClick={() => conso()}>console.log 찍기</button>
        </div>
    );
}

