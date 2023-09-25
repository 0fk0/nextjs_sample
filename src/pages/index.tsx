import styles from '@/styles/Home.module.css'
import { SubmitType } from '@/utils/Types'
import { getAllSubmits } from '@/utils/api'

type Props = {
  submits: SubmitType[];
}

export async function getStaticProps() {
  const submits: SubmitType[] = await getAllSubmits();

  return {
    props: {
      submits,
    },
  };
}

export default function Home({submits}: Props) {
  return (
    <>
      <div className={styles.main}>
        <ul>
          {submits.map((submit: SubmitType) => (
            <li key={submit.id}>
              <h2>{submit.title}</h2>
              <p>{submit.answer}</p>
              <p>{submit.evaluation}</p>
            </li>
          ))}
        </ul>
      </div>
    </>
  )
}
