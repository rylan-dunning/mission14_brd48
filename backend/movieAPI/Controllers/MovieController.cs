using Microsoft.AspNetCore.Mvc;
using movieAPI.Data;

namespace movieAPI.Controllers
{

    [ApiController]
    [Route("[controller]")]
    public class MovieController : Controller
    {
        private JoelHiltonMovieCollectionContext context;
        public MovieController(JoelHiltonMovieCollectionContext temp)
        {
            context = temp;
        }

        public IEnumerable<Movie> Get()
        {
            var x = context.Movies.ToArray();
            return context.Movies.ToArray();
        }
    }
}
