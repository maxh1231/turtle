import { useQuery } from "@apollo/client";
import { QUERY_SCORE } from "../../../utils/queries";
import Calendar from "./Calendar";
import Charts from "./Charts";
import Info from "./Info";

const Stats = ({ user }) => {
    const { loading, data } = useQuery(QUERY_SCORE, { variables: { userId: user }});

    if (loading) {
        return (
            <p>Loading...</p>
        );
    };

    return (
        <section className='bg-slate-200 m-4 rounded-md'>
            <div className='bg-slate-300 p-2 rounded-t-md'>
                <h2 className='font-bold'>Stats</h2>
            </div>
            <div className='p-4 flex flex-col'>
                <div className='sm:flex sm:justify-around lg:block'>
                    <Info data={data} />
                    <Calendar data={data} />
                </div>
                <Charts data={data} />
            </div>
        </section>
    );
};

export default Stats;