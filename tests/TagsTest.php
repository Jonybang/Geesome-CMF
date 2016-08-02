<?php

use Illuminate\Foundation\Testing\WithoutMiddleware;
use Illuminate\Foundation\Testing\DatabaseMigrations;
use Illuminate\Foundation\Testing\DatabaseTransactions;

use App\Models\Tag;
use App\Models\Post;
use App\Models\User;

class AutoTagsTest extends TestCase
{
    /**
     * A basic test example.
     *
     * @return void
     */
    public function testExample()
    {
        \Log::info('=====================================================');
        $test_post = Post::create(['author_id' => User::first()->id]);
        //random
        $tags = Tag::orderByRaw("random()")->limit(3)->lists('id')->toArray();
        //not random
        //$tags = Tag::whereIn('name', ['Andrasta', 'Blood', 'Beach'])->limit(3)->lists('id')->toArray();
        \Log::info('Tags ids: ');
        \Log::info(implode(', ', $tags));
        $test_post->tags()->sync($tags);

        $test_post = Post::find($test_post->id);
        \Log::info('Intial post tags: ');
        \Log::info(implode(', ', $test_post->tags()->lists('name')->toArray()));

        $tags_ids = $test_post->addAutoTags();
        $test_post = Post::find($test_post->id);
        \Log::info('After auto post tags: ');
        \Log::info(implode(', ', $test_post->tags()->lists('name')->toArray()));

        \Log::info('Result images post path: ');
        \Log::info($test_post->generatePathArray());


        $this->assertTrue(false);

        $test_post->delete();
    }
}
