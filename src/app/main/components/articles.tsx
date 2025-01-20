import { articles } from "@/__mock__/__data__/article";
import { Button } from "@/components/ui/button";
import { ArrowRight, Newspaper } from "lucide-react";
import { Link } from "react-router-dom";

function ArticlesSection() {
  return (
    <section className="max-w-5xl mx-auto px-3 md:px-6 mb-6 py-3 mt-4">
      <div className="mb-4 md:mb-7 lg:mb-6 flex gap-3 items-center">
        <Button size={"icon"}>
          <Newspaper />
        </Button>
        <h2 className="text-2xl font-bold tracking-tight sm:text-3xl">
          Articles
        </h2>
      </div>
      <div>
        <ul className="grid grid-cols-1 xl:grid-cols-3 gap-y-7 gap-x-6 items-start px-2.5">
          {articles.map((item, idx: number) => (
            <li
              className="relative flex flex-col md:items-center sm:flex-row xl:flex-col items-start p-3 hover:shadow-sm rounded-md transition-colors hover:bg-accent hover:rounded-xl"
              key={`Blog-${idx}`}
            >
              <div className="order-1 sm:ml-6 xl:ml-0">
                <h3 className="mb-1 text-slate-900 font-semibold">
                  <span className="mb-1 block text-sm leading-6 text-purple-500">
                    Supper User
                  </span>
                </h3>
                <Link
                  to={`/articles/${item.slug}`}
                  className="mb-1 text-popover-foreground font-semibold hover:underline transition-colors ease-linear"
                >
                  {item.title}
                </Link>
                <div className="mt-2 text-sm text-muted-foreground">
                  <p>{item.body}</p>
                </div>
              </div>
              <img
                src="https://via.placeholder.com/300x200"
                alt=""
                className="mb-6 shadow-md rounded-lg bg-slate-50 w-full sm:w-[17rem] sm:mb-0 xl:mb-6 xl:w-full"
                width="1216"
                height="640"
              />
            </li>
          ))}
        </ul>

        <div className="flex w-full justify-center">
          <Button className="w-full mt-3 max-w-[14rem] mx-auto" asChild>
            <Link to="#" className="flex items-center gap-2">
              <span>View More</span>
              <ArrowRight />
            </Link>
          </Button>
        </div>
      </div>
    </section>
  );
}

export default ArticlesSection;
