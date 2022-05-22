<?php

namespace App\GraphQL\Queries;

use App\Models\Transaction;
use App\Domain\Metrics\ValueMetric;

class TotalSavings extends ValueMetric
{
    public function ranges() 
    {
        return null;
    }

    /**
     * @param  null  $_
     * @param  array<string, mixed>  $args
     */
    public function __invoke($_, array $args)
    {
        return Transaction::savings()->sum('amount');
    }
}
