<?php

use Illuminate\Database\Seeder;
use App\Models\Post;
use App\Models\Template;
use App\Models\User;
use App\Models\Context;
use App\Models\Tag;

class PostsTableSeeder extends Seeder
{
    /**
     * Run the database seeds.
     *
     * @return void
     */
    public function run()
    {
        $seeds = [
            [
                'Пост 1',
                'Контент, содержимое, описание и прочее поста 1',
                json_encode([
                    ['type' => 'image','src' => 'assets/img/girls/1-1.jpg'],
                    ['type' => 'image','src' => 'assets/img/girls/1-2.jpg'],
                    ['type' => 'image','src' => 'assets/img/girls/1-3.jpg']
               ], JSON_PRETTY_PRINT)
            ],
            [
                'Пост 2',
                'Контент, содержимое, описание и прочее поста 2',
                json_encode([
                    ['type' => 'image','src' => 'assets/img/girls/2-1.jpg'],
                    ['type' => 'image','src' => 'assets/img/girls/2-2.jpg'],
                    ['type' => 'image','src' => 'assets/img/girls/2-3.jpg'],
                    ['type' => 'image','src' => 'assets/img/girls/2-4.jpg'],
                    ['type' => 'image','src' => 'assets/img/girls/2-5.jpg'],
                    ['type' => 'image','src' => 'assets/img/girls/2-6.jpg']
                ], JSON_PRETTY_PRINT)
            ],
        ];

        $author_id = User::first()->id;
        $context_id = Context::first()->id;

        foreach($seeds as $seed){
            $post = Post::create([
                'attachments' => $seed[2],
                'is_published' => true,
                'author_id' => $author_id
            ]);

            $post->contents()->create([
                'title' => $seed[0],
                'content' => $seed[1],
                'context_id' => $context_id
            ]);

            $tags_ids = [];
            for($i=0; $i<3; $i++){
                $id = Tag::orderByRaw(env('DB_CONNECTION') == 'sqlite' ? "random()" : 'RAND()')->first()->id;
                if(!in_array($id, $tags_ids))
                    $post->tags()->attach($id);
                $tags_ids[] = $id;
            }
            $post->save();
        }
    }
}
