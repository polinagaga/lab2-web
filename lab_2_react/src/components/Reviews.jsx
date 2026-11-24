import { useEffect, useState } from 'react';

function Reviews() {
  const [comments, setComments] = useState([]);
  const VARIANT = 1; // Заміни на свій номер варіанта

  useEffect(() => {
    fetch(`https://jsonplaceholder.typicode.com/posts/${VARIANT}/comments`)
      .then((res) => res.json())
      .then((data) => setComments(data))
      .catch((err) => console.error('Помилка завантаження відгуків:', err));
  }, []);

  return (
    <section className="md:col-span-2 bg-white dark:bg-slate-800 p-6 rounded-2xl shadow-md border-l-4 border-emerald-500 transition-colors">
      <h2 className="text-2xl font-bold text-slate-800 dark:text-white mb-4 flex items-center gap-2">
        <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 inline-block"></span>
        Відгуки попередніх роботодавців
      </h2>
      <div className="space-y-4">
        {comments.map((comment) => (
          <div
            key={comment.id}
            className="p-4 bg-emerald-50/50 dark:bg-slate-700/50 rounded-xl border border-emerald-100 dark:border-slate-600"
          >
            <h3 className="font-semibold text-emerald-950 dark:text-emerald-300">
              {comment.name}{' '}
              <span className="text-xs font-normal text-slate-500 dark:text-slate-400">
                ({comment.email})
              </span>
            </h3>
            <p className="text-slate-600 dark:text-slate-300 text-sm mt-1">
              {comment.body}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}

export default Reviews;